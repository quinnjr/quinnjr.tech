declare const process: any;

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Subscription, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

import { Certification } from '../../../server/@generated/prisma-nestjs-graphql/certification';
import { Education } from '../../../server/@generated/prisma-nestjs-graphql/education';
import { Experience } from '../../../server/@generated/prisma-nestjs-graphql/experience';
import { User } from '../../../server/@generated/prisma-nestjs-graphql/user';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  public loading = true;
  public user?: User;

  private queryObservable?: Observable<ApolloQueryResult<User>>;
  private querySubscription?: Subscription;

  constructor(private readonly $apollo: Apollo) {}

  public ngOnInit(): void {
    this.querySubscription = this.$apollo
      .query<{ user: User }>({
        query: gql`
          query GetFullProfile($email: String!) {
            user(email: $email) {
              firstName
              middleName
              lastName
              certifications {
                name
                certifier
              }
              email
              experiences {
                employer
                title
                location
                startYear
                endYear
                description
              }
              educations {
                name
                location
                degree
                graduationYear
                activities
                campusImage
                url
              }
              github
              linkedin
              profile
              profileHighlights
              profilePicture
              skills
            }
          }
        `,
        variables: {
          email: process.env.ADMIN_EMAIL
        }
      })
      .subscribe(
        ({ data, loading, error }: ApolloQueryResult<{ user: User }>) => {
          // if (error) this.$flash.add(error.message);

          this.loading = loading;
          this.user = data.user;
        }
      );
  }

  public ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  public skillsSplit(count: number): Array<string> | undefined {
    return this.user?.skills.reduce((result: any[], item: any, idx: number) => {
      const chunkIdx = Math.floor(idx / 3);

      if (!result[chunkIdx]) {
        result[chunkIdx] = [];
      }

      result[chunkIdx].push(item);

      return result;
    }, []);
  }
}
