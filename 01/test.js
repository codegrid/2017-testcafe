import {Selector} from 'testcafe';

fixture('アンケートフォーム')
  .page('http://localhost:8080/01/1.html');

test('必要項目を入力後、送信して遷移先を確認', async t => {
  const userName   = await Selector('#user-name');
  const submitButton = await Selector('#submit-button');
  await t
    .setNativeDialogHandler(() => true)
.typeText(userName, 'ピクセルグリオ')
    .click(submitButton);
  await t.expect(Selector('#thanks-message').innerText).eql('ピクセルグリオ様、アンケートにお答えいただき、ありがとうございました。', 'メッセージが表示されること');
});
