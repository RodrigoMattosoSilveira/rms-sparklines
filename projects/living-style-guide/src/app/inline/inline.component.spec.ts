import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineComponent } from './inline.component';
import { SparkLineSimpleComponent } from './spark-line-simple/spark-line-simple.component';
import { SparkLineDecorationComponent } from './spark-line-decoration/spark-line-decoration.component';
import { SparkLineShadeComponent } from './spark-line-shade/spark-line-shade.component';

import { AngularMaterialModuleModule } from '../utils/angular-material-module/angular-material-module.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RmstekSparklinesModule } from '@rmstek/sparklines';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

describe('InlineComponent', () => {
    let component: InlineComponent;
    let fixture: ComponentFixture<InlineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [
            InlineComponent,
            SparkLineSimpleComponent,
            SparkLineDecorationComponent,
            SparkLineShadeComponent,
        ],
        imports: [
            AngularMaterialModuleModule,
            BrowserAnimationsModule,
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
        fixture = TestBed.createComponent(InlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
