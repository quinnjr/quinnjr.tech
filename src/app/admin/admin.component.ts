import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* eslint @typescript-eslint/naming-convention: off */
enum AdminSubroutes {
  SiteAdministration = '/admin',
  AccountAdministration = './account',
  ManageArticles = './manage-articles',
  CreateArticle = './create-article',
  UpdateResume = './update-resume',
  ManageProjects = './manage-projects',
  CreateProject = './create-project'
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public eAdminSubroutes = AdminSubroutes;

  constructor() {}

  public ngOnInit(): void {}
}
