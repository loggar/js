// BookRecordManager singleton
var BookRecordManager = (function () {
 
  var bookRecordDatabase = {};
 
  return {
    // add a new book into the library system
    addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {
 
      var book = BookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );
 
      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {
 
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },
 
    extendCheckoutPeriod: function ( bookID, newReturnDate ) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },
 
    isPastDue: function ( bookID ) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
    }
  };
 
})();