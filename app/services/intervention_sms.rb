class InterventionSMS
    attr_reader :client
    def initialize
        @client = Twilio::REST::Client.new account_sid="ACa2c2ee39fa125e90229997e14be32ecc", auth_token="176ec4e7d1eb1480c7853793776f832e"
    end

    def send_text(user, intervention)
        @intervention = intervention
        @user = intervention.user
        client.messages.create(
            to: user.phone_number,
            from: "+19896655653",
            body: "There's been an update to your intervention report. Log into the app to see the update."
        )
    end
end
