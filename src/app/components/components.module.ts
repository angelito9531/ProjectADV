import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NativeComponent } from './native/native.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { LoginComponent } from './login/login.component';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { EquipoTrabajoComponent } from './equipo-trabajo/equipo-trabajo.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { CortarTextoPipe } from './pipe/cortar-texto.pipe';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RadioComponent } from './radio/radio.component';
import { RadioBibliaComponent } from './radio-biblia/radio-biblia.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        ProgressBarComponent,
        NativeComponent,
        CarrouselComponent,
        LoginComponent,
        AcercaDeNosotrosComponent,
        EquipoTrabajoComponent,
        VisionMisionComponent,
        CortarTextoPipe,
        ContactanosComponent,
        RadioComponent,
        RadioBibliaComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
