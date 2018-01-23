import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('Users', function() {

  it('should allow a valid email', function() {
    const testUser = {
      emails: [
        {
          address: 'Test@example.com'
        }
      ]
    };
    const res = validateNewUser(testUser);

    expect(res).toBe(true);
  });

  it('should reject an invalid email', function() {
    const testUser = {
      emails: [
        {
          address: 'Testexample.com'
        }
      ]
    };

    expect(() => {
      validateNewUser(testUser);
    }).toThrow();
  });

  });
};
