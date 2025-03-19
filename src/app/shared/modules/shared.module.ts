import { CommonModule } from '@angular/common';
// import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule,

    // NgxMaskModule.forRoot({
    //   showMaskTyped: true,
    // }),
    // ReactiveFormsModule,
  ],

  exports: [
    CommonModule,
    //   FormsModule,
    //   FullCalendarModule,
    //   HttpClientModule,
    //   MaterialModule,
    //   NgxMaskModule,
    //   ReactiveFormsModule,
    //   RouterModule,
    //   UtilitiesModule,
    //   ...atoms,
    //   ...organisms,
  ],
})
export class SharedModule {}
