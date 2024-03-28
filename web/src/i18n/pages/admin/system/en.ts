export default {
 adminServer:{
   tapWebsite:"Website",
   tapSubscribe:"Subscribe",
   tapPayment:"Payment",
   tapEmail:"Email",
   tapSecurity:"Security",
   tapNotice:"Notice",
   tapMigration:"Migration",
   emailTesting:"Email testing",
   emailCodeTip:"Email verification code content, supports HTML, 'emailcode' is a verification code field, cannot be deleted!",
   migrationTip:"Please backup your data before migration. Due to data incompatibility between panels, the migration only retains the user's basic account email and uuid data, and sets the user password to 123456. Please guide the user to change the password in a timely manner",
   migrationTip2:"Please backup your data and fill in the correct database information. Do you want to continue?",
   RequestMinute:"Request/minute",
   addPay:"Add payment",
   modifyPay:"Modify payment",
   Server:{
     id:"id",
     created_at: "created at",
     updated_at: "updated at",
     //website
     enable_register: "enable register",
     enable_email_code: "enable register email code",
     enable_login_email_code: "enable login email code",
     acceptable_email_suffixes: "acceptable email suffixes",
     is_multipoint: "is multipoint",
     backend_url: "backend url",
     frontend_url: "frontend_ rl",
     api_prefix: "api prefix",
     sub_name: "subscribe name",
     tek: "transport encryption keys",
     enabled_clock_in: "enabled clock in",
     // email
     email_from: "email sender",
     email_from_alias: "email sender alias",
     email_secret: "email secret",
     email_host: "email host",
     email_port:"email port",
     email_is_ssl: "is ssl",
     email_nickname: "email nickname",
     email_subject: "email subject",
     email_content: "email content",
     // security captcha
     key_long:"key_long",
     img_width:"img_width",
     img_height:"img_height",
     open_captcha:"open_captcha",
     open_captcha_time_out:"open_captcha_time_out",
     // security jwt
     signing_key: "signing key",
     expires_time: "expires time",
     buffer_time: "buffer time",
     issuer: "issuer",
     // security RateLimitParams
     ip_role_param:"ip role param",
     visit_param:"visit param",
     // notice
     push_method:"push method",
     trigger_condition:"trigger condition",
     enable_tg_bot:"enable tg bot",
     enable_email:"enable email",
     enable_web_mail:"enable web mail",
     bot_token: "bot token",
     admin_id: "admin id",
     tg_socks5 :"tg socks5",
     when_user_registered: "when user registered",
     when_user_purchased: "when user purchased",
     when_node_offline: "when node offline",
   },
   Migration:{
     panel_type:"panel type",
     db_address:"db address",
     db_port:"db port",
     db_name:"db name",
     db_username:"db username",
     db_password:"db password",
   },
}
};