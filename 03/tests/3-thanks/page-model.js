import { Selector, t } from 'testcafe';

export default class Page {
  constructor () {
    this.messageText = Selector('#thanks-message').innerText;
  }
}