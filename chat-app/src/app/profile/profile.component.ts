import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { UserService } from '../user.service';
import { TokenManager } from '../tokenmanager.service';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [UserService]
})
export class ProfileComponent implements OnInit {
    usercurrentId: any;
    users: any;
    crntauthenticuser;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private tokenManager: TokenManager,
    ) {
        this.crntauthenticuser = this.tokenManager.retrieveToken().userid;
    }

    ngOnInit(){
        this.users = this.userService.getallUsers(this.tokenManager.retrieveToken().token);

        console.log(this.crntauthenticuser);
        this.route.paramMap.subscribe(params => {
            this.usercurrentId = params.get('userId');
            if(this.crntauthenticuser != this.usercurrentId){
                this.router.navigate(['/login']);
            }
          });
    }
}
