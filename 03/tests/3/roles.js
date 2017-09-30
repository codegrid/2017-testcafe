import { Role } from 'testcafe';

const loginUrl = 'http://localhost:8080/03/login.html';

export const userRole = Role(loginUrl, async t => {
  await t
    .typeText('#user-id',       'user1')
    .typeText('#user-password', 'password')
    .click('#login-button');
});

export const adminRole = Role(loginUrl, async t => {
  await t
    .typeText('#user-id',       'admin')
    .typeText('#user-password', 'password')
    .click('#login-button');
});
