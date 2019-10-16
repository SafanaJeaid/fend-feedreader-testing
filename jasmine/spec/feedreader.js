/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('each feed has a URL defined and URL is not empty', function() {
            // using for each to loop through array of objects
            allFeeds.forEach(function(feed, i) {
                // making sure all of the feeds' url are defined and not empty
                let feedUrl = allFeeds[i].url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl).not.toBe();
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('each feed has a name that is not empty', function() {
            allFeeds.forEach(function(feeds, i) {
                // looping through the array to make sure all feeds' name is defined and not empty
                let feedName = allFeeds[i].name;
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe();
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('menu element is hidden by default', function() {
            // check if the body in html has the class "menu hidden"
            expect($('body').hasClass("menu-hidden")).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('menu changes visibility when menu icon is clicked', function() {
            // when the icon is clicked initially expect the menu to be shown
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // when the icon is clicked again the menu should be hidden
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

         // TODO: Write a test that ensures when the loadFeed
         // * function is called and completes its work, there is at least
         // * a single .entry element within the .feed container.
         // * Remember, loadFeed() is asynchronous so this test will require
         // * the use of Jasmine's beforeEach and asynchronous done() function.
         
        beforeEach(function (done) {
            // this will singal the framework that loadFeed has done what it was supposed to do
            loadFeed(0, done);
        });

        it('loadFeed is called and done and has at least one entry', function() {
            // the feed's entry's length should be greater than 0
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feedTestOne, feedTestTwo;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         beforeEach(function (done) {
            loadFeed(0, function() {
                // store the first feed to compare
                feedTestOne = $('.feed').html();
                done();
            });
            loadFeed(1, function() {
                // store the second feed to compare
                feedTestTwo = $('.feed').html();
                done();
            });
        });

         it('content actually changes when a new feed is loaded by loadFeed', function() {
            // the two feeds shouldn't be equals
            expect(feedTestTwo).not.toBe(feedTestOne);
         });
    });
}());
