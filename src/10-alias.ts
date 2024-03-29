(() => {
  type UserID = string | number;
let userId: UserID;

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
    }

    greeting(21222, 'L');
    greeting(2334, 'S');
})();
