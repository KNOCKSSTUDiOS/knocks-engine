import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class KnocksEngine:
    def __init__(self):
        self.version = "9K_SOVEREIGN_V1"
        # EMAIL CONFIGURATION (Update these with your details)
        self.smtp_server = "smtp.gmail.com" 
        self.smtp_port = 587
        self.sender_email = "your-email@gmail.com" 
        self.sender_password = "your-app-password" # Use Google App Password

    def send_success_email(self, operator_email, operator_name, coin_balance):
        """Sends the Master Sync Email automatically."""
        subject = f"🛡️ RENDER_COMPLETE: [FILE_ID_9K] IS READY"
        
        body = f"""
        --------------------------------------------------
        [ KNOCKSSTUDIOS | GLOBAL PROXIED ENGINE ]
        --------------------------------------------------
        OPERATOR_STATUS: SUCCESSFUL_BURN
        --------------------------------------------------
        
        GREETINGS {operator_name.upper()},

        The sovereign engine has completed your request. 
        Your 9K visual data and Lyria-3 audio are synthesized.

        FILES ARE STAGED IN YOUR DASHBOARD.

        REMAINING_COIN_BALANCE: {coin_balance}
        --------------------------------------------------
        END_OF_BRIEF
        --------------------------------------------------
        """

        msg = MIMEMultipart()
        msg['From'] = self.sender_email
        msg['To'] = operator_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        try:
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.sender_email, self.sender_password)
            server.send_message(msg)
            server.quit()
            print(f"NOTIFICATION_SENT_TO: {operator_email}")
        except Exception as e:
            print(f"MAIL_SYSTEM_ERROR: {e}")

    def execute_burn(self, user_data):
        """Triggers the Render and the Email."""
        print("INITIALIZING_9K_BURN...")
        
        # Simulate rendering time
        import time
        time.sleep(3) 
        
        # Once render is finished, send the email
        self.send_success_email(
            user_data['email'], 
            user_data['name'], 
            user_data['coins']
        )
        return "BURN_SUCCESSFUL"

# --- TEST THE SYSTEM ---
# engine = KnocksEngine()
# engine.execute_burn({'email': 'test@user.com', 'name': 'Operator_01', 'coins': 1000})
