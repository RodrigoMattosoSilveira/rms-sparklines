import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModuleModule } from '../../utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SparkLineShadeComponent } from './spark-line-shade.component'
import { LibraryModule } from 'library';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


describe('SparkLineSimpleComponent', () => {
    let component: SparkLineShadeComponent;
    let fixture: ComponentFixture<SparkLineShadeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            SparkLineShadeComponent,
        ],
        imports: [
            AngularMaterialModuleModule,
            LibraryModule,
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
        fixture = TestBed.createComponent(SparkLineShadeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
