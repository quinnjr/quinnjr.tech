import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Set } from 'immutable';
import { FlashMessageService } from '../flash-message/flash-message.service';

import { Article } from '../models/article';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public articles: Set<Article>;
  public projects: Set<Project>;

  constructor(
    private readonly $apollo: Apollo,
    private readonly $flashMessage: FlashMessageService
  ) {
    this.articles = Set();
    this.projects = Set();
  }

  public get testMarkdown(): string {
    return '# Hello World';
  }

  public ngOnInit(): void {
    this.$apollo.watchQuery({
      query: gql`
        {
          articles(take: 5) {
            id
            title
            description
            createdAt
          }
          projects(take: 5) {
            id
            description
          }
        }
      `
    })
      .valueChanges.subscribe((res: any) => {
        if(res.error) {
          this.$flashMessage.add(res.error);
        }

        for(const article of res?.data?.articles) {
          this.articles = this.articles.add(article);
        }
      },
      (err) => this.$flashMessage.add(err));
  }

}
