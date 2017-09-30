import Page from './page-model';

fixture('アンケートフォーム')
  .page('http://localhost:8080/03/3.html');

const page = new Page();

test('全ての項目を入力後、送信して遷移先を確認', async t => {
  await t
    .setNativeDialogHandler(() => true)
    .typeText(page.userName, 'ピクセルグリオ')
    .click(page.userJobFrontend())
    .click(page.userSkillFrontend())
    .click(page.address)
    .click(page.addressObtionNearKantou())
    .drag(...page.satisfactionMiddleOffsets())
    .typeText(page.note, '次回も参加します。');

  const thanksPage = await page.submitForm();
  await t.expect(thanksPage.messageText)
    .eql('ピクセルグリオ様、アンケートにお答えいただき、ありがとうございました。');
});
