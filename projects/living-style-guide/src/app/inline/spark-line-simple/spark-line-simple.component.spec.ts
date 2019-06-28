import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLineSimpleComponent } from './spark-line-simple.component';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('SparkLineSimpleComponent', () => {
    let component: SparkLineSimpleComponent;
    let fixture: ComponentFixture<SparkLineSimpleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            SparkLineSimpleComponent,
        ],
        imports: [
            AngularMaterialModuleModule,
            RmstekSparklinesModule,
            HttpModule,
            HttpClientModule,
            MarkdownModule.forRoot({
                loader: HttpClient, // optional, only if you use [src] attribute
                markedOptions: {
                    provide: MarkedOptions,
                    useValue: {
                        gfm: true,
                        tables: true,
                        breaks: false,
                        pedantic: false,
                        sanitize: false,
                        smartLists: true,
                        smartypants: false,
                    },
                },
            }),
        ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SparkLineSimpleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
