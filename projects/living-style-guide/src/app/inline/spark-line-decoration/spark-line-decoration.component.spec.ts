import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SparkLineDecorationComponent } from './spark-line-decoration.component';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


describe('SparkLineSimpleComponent', () => {
    let component: SparkLineDecorationComponent;
    let fixture: ComponentFixture<SparkLineDecorationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            SparkLineDecorationComponent,
        ],
        imports: [
            AngularMaterialModuleModule,
            RmstekSparklinesModule,
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
        fixture = TestBed.createComponent(SparkLineDecorationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
