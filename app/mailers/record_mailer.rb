class RecordMailer < ApplicationMailer
    default from: 'notifications@iReporter.com'
    def record_update(user, intervention)
        @intervention = intervention
        @user = intervention.user
    mail(
        to: user.email,
        subject: "Intervention Report Status Update"
    )
    end
end
