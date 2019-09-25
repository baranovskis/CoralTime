import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PagedResult, ODataServiceFactory, ODataService } from './odata';
import { Issue } from '../models/issue';

@Injectable()
export class IssuesService {
	readonly odata: ODataService<Issue>;

	constructor(private odataFactory: ODataServiceFactory) {
		this.odata = this.odataFactory.CreateService<Issue>('Issues');
	}

	getIssues(projectName?: string): Observable<PagedResult<Issue>> {
		let filters = [];
		let query = this.odata
			.Query();

		query.OrderBy('id asc');
		if (projectName) {
			filters.push('contains(tolower(projectName),\'' + projectName.trim().toLowerCase() + '\')');
		}
		query.Filter(filters.join(' and '));

		return query.ExecWithCount().map(res => {
			res.data = res.data.map((x: Object) => new Issue(x));
			return res;
		});
	}
}
