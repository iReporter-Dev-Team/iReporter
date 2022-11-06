class RedflagSms
    attr_reader :client
    def initialize
        @client = Twilio::REST::Client.new account_sid="ACa2c2ee39fa125e90229997e14be32ecc", auth_token="0454ec8c627158f732e0f2122908abcb"
    end

    def send_sms(user, redflag)
        @redflag = redflag
        @user = redflag.user
        client.messages.create(
            to: user.phone_number,
            from: "+19896655653",
            body: "There's been an update to your red flag report. Log into the app to see the update."
        )
    end
end
