# README
This is example How to use ckeditor upload imgage with carrierwave,(on locally or cloud)

Because [CkEditor](https://github.com/galetahub/ckeditor) has pool doc nearly can't complete image/file upload tester,this example just for who want to use
carrierwave upload file in ckeditor.
additonal you can save the file in aliyun oss, Just change CkeditorAttachmentFileUploader/CkeditorPictureUploader
```ruby
  "storage :aliyun"
```
#install
Gemfile
```ruby
gem 'rest-client'
gem 'carrierwave-aliyun'
gem 'ckeditor'
gem 'mini_magick'
```
###[carrierwave-aliyun](https://github.com/huacnlee/carrierwave-aliyun)




rails generate ckeditor:install --orm=active_record --backend=carrierwave
For Rails 4, add the following to config/initializers/assets.rb:
Rails.application.config.assets.precompile += %w( ckeditor/* )
#important
###in app/assets/javascripts/ckeditor/config.js
##Just copy Unless You KNOW what are you doing!

#last
>change database.yml, set your own user/password

>change carrierwave.rb set your own aliyun_access_id/aliyun_access_key