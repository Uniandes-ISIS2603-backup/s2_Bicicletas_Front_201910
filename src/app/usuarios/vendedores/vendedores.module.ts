import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorDetailComponent } from './vendedor-detail/vendedor-detail.component';
import { VendedorMediospagoComponent } from './vendedor-mediospago/vendedor-mediospago.component';
import { VendedorVentaAddComponent } from './vendedor-venta-add/vendedor-venta-add.component';
import { VendedorVentaListComponent } from './vendedor-venta-list/vendedor-venta-list.component';
import { VendedorEditComponent } from './vendedor-edit/vendedor-edit.component';
import { VendedorService } from './vendedor.service';
import { BicicletaModule } from '../../bicicleta/bicicleta.module';

@NgModule({
  imports: [
    CommonModule,
    BicicletaModule
  ],
  declarations: [
    VendedorDetailComponent,
    VendedorMediospagoComponent,
    VendedorVentaAddComponent,
    VendedorVentaListComponent,
    VendedorEditComponent
  ],
  bootstrap: [VendedorDetailComponent],
  providers: [VendedorService],
  exports: [VendedorDetailComponent]
})
export class VendedoresModule { }
