class NotifierMailer < ApplicationMailer
  default to: "roberts.josephpaul@gmail.com",
          from: "roberts.josephpaul@gmail.com"

  def simple_message(first_name, last_name, email, message)
    mail(
      "reply-to": email_address_with_name(email, "#{first_name} #{last_name}"),
      subject: "New contact form message",
      body: "#{message} \n \n from #{first_name} #{last_name} at #{email}"
    )
  end
end
