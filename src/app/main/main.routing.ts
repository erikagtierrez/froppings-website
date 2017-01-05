import { DeleteUserComponent } from './../delete-user/delete-user.component';
import { ModifyUserComponent } from './../modify-user/modify-user.component';
import { AdminUsersComponent } from './../admin-users/admin-users.component';
import { ReportsComponent } from './../reports/reports.component';
import { PointsComponent } from './../points/points.component';
import { Routes } from '@angular/router';

export const MAIN_ROUTING: Routes=[        
{ path: '', redirectTo: 'points',pathMatch: 'full' },
{path: 'points', component: PointsComponent},
{path: 'reports', component: ReportsComponent},
{path: 'usersAdmin', component: AdminUsersComponent},
{path: 'modifyUser', component: ModifyUserComponent},
{path: 'deleteUser', component: DeleteUserComponent}
];