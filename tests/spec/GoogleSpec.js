describe("Google", function(){
  var bot;
  var userAgent;

  beforeEach(function() {
    bot    = null;
    userAgent = null;
  });

  describe("Googlebot UserAgent", function() {

    beforeEach(function() {
      userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
      bot = new isBot.Class(userAgent);
    });

    it("should be Googlebot", function() {
      expect(bot.googlebot).toBe(true);
    });

    it("should be bot", function() {
      expect(bot.bot).toBe(true);
    });

  });
});
