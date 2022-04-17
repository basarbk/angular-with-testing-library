import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  describe('Default test setup', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    });
  
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it(`should have as title 'testing-lib'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('testing-lib');
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('testing-lib app is running!');
    });

    it('should have Resources header', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h2')?.textContent).toContain('Resources');
    })
  })

  describe('With testing-library', () => {
    it('should have Resources header', async () => {
      await render(AppComponent);
      const header = screen.getByRole('heading', { name: 'Resources'});
      expect(header).toBeTruthy();
    })
  });
});
