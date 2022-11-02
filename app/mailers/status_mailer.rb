class StatusMailer < ApplicationMailer
    default from: 'notifications@iReporter.com'
    def status_update(user, redflag)
        @redflag = redflag
        @user = redflag.user
    mail(
        to: user.email,
        subject: "Red Flag Report Status Update"
    )
    end
end
