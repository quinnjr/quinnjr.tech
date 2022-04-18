import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';

import { FlashMessageService } from '../flash-message/flash-message.service';
import { Article } from '../../../server/@generated/prisma-nestjs-graphql/article/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articles: Set<Article>;
  public githubResponse: BehaviorSubject<any | null> = new BehaviorSubject(
    null
  );

  constructor(
    private readonly $apollo: Apollo,
    private readonly $flashMessage: FlashMessageService
  ) {
    this.articles = new Set();
  }

  public ngOnInit(): void {
    this.$apollo
      .query({
        query: gql`
          query {
            getGithubInformation(limit: 10) {
              repositories
            }
          }
        `
      })
      .subscribe(({ loading, error, data }) => {
        if (loading) {
          // do something
        }

        if (error) {
          this.$flashMessage.add(error.message);
        } else {
          this.githubResponse.next(data);
        }
      });
  }
}
