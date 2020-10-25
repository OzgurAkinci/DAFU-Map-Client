import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule,  HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { pagesToggleService } from './@pages/services/toggler.service';

import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { QuickviewService } from './@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './@pages/components/header/header.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { pgListViewModule} from './@pages/components/list-view/list-view.module';
import { pgCardModule} from './@pages/components/card/card.module';
import { pgCardSocialModule} from './@pages/components/card-social/card-social.module';

import {BsDropdownModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CollapseModule,
        ModalModule,
        ProgressbarModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
} from 'ngx-bootstrap';

import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { pgSwitchModule } from './@pages/components/switch/switch.module';
import { ProgressModule } from './@pages/components/progress/progress.module';

import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DashboardComponent } from './@pages/layouts/dashboard/dashboard.component';
import {Base} from './@pages/layouts/base/base.component';
import {BlankComponent} from './@pages/layouts/blank/blank.component';
import {AuthInterceptor} from './auth/auth.interceptor';
import {MessageModule} from './@pages/components/message/message.module';
import {MessageService} from './@pages/components/message/message.service';
import {RootLayout} from './@pages/layouts';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent, QuickviewComponent, SearchOverlayComponent, HeaderComponent, HorizontalMenuComponent,
    RootLayout,
    Base,
    DashboardComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    QuillModule.forRoot(),
    MessageModule
  ],
  providers: [QuickviewService, pagesToggleService, MessageService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
