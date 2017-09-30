import { Selector, t } from 'testcafe';
import ThanksPage from '../3-thanks/page-model';

const userJobs   = Selector('input[name=user-job]');
const userSkills = Selector('input[name=user-skill]');

export default class Page {
  constructor () {
    this.userName           = Selector('#user-name');
    this.address            = Selector('#address');
    this.satisfaction       = Selector('#satisfaction');
    this.satisfactionHandle = this.satisfaction.find('.ui-slider-handle');
    this.note               = Selector('#note');
    this.submitButton       = Selector('#submit-button');
  }

  userJobFrontend() {
    return this.userJob(1);
  }

  userSkillFrontend() {
    return this.userSkill(3);
  }

  addressObtionNearKantou() {
    return this.addressOption(2);
  }

  satisfactionMiddleOffsets() {
    return [this.satisfactionHandle, 500, 0];
  }

  userJob(value) {
    return userJobs.filter(`[value="${value}"]`);
  }

  userSkill(value) {
    return userSkills.filter(`[value="${value}"]`);
  }

  addressOption(value) {
    return this.address.find('option').filter(`[value="${value}"]`);
  }

  async submitForm() {
    await t.click(this.submitButton);
    const thanksPage = new ThanksPage();
    return thanksPage;
  }
}