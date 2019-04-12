
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {BicicletaService} from './bicicleta.service';
import {BicicletaListComponent} from './bicicleta-list/bicicleta-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BicicletaDetailComponent} from './bicicleta-detail/bicicleta-detail.component';
import {BicicletaResenaComponent} from './bicicleta-resena/bicicleta-resena.component';
import {BicicletaCreateComponent} from './bicicleta-create/bicicleta-create.component';
import {BicletaCreateResenaComponent} from './bicicleta-create-resena/bicicleta-create-resena.component';
import {BicicletaEditComponent} from './bicicleta-edit/bicicleta-edit.component';
import { BicicletaEditResenaComponent } from './bicicleta-edit-resena/bicicleta-edit-resena.component';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        BicicletaListComponent,
		BicicletaDetailComponent,
		BicicletaResenaComponent,
		BicicletaCreateComponent,
		BicletaCreateResenaComponent,
		BicicletaEditComponent,
		BicicletaEditResenaComponent
    ],
    providers: [BicicletaService],
    exports: [BicicletaListComponent]
})
export class BicicletaModule {}