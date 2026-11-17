
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the portfolio heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Turning ideas into');
  });

  it('should handle skill selection', () => {
    const fixture = TestBed.createComponent(App);

    fixture.componentInstance.onSkillSelected('Angular');

    expect(fixture.componentInstance.selectedSkill)
      .toBe('Angular');
  });

  it('should update the click counter', () => {
    const fixture = TestBed.createComponent(App);

    fixture.componentInstance.showMessage();

    expect(fixture.componentInstance.clickCount).toBe(1);
    expect(fixture.componentInstance.clickMessage)
      .toContain('1 time(s)');
  });
});
