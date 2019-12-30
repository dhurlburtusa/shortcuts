# Rails Active Storage Notes

Active Storage facilitates uploading files to a cloud storage service like Amazon S3 and attaching those files to Active Record objects. It comes with a local disk-based service for development and testing and supports mirroring files to subordinate services for backups and migrations.

Using Active Storage, an application can transform image uploads with ImageMagick, generate image representations of non-image uploads like PDFs and videos, and extract metadata from arbitrary files.


## Setup

Active Storage uses two tables in your application’s database named `active_storage_blobs` and `active_storage_attachments`. After creating a new application, run `rails active_storage:install` to generate a migration that creates these tables. Use `rails db:migrate` to run the migration.

Declare Active Storage services in `config/storage.yml`. For each service your application uses, provide a name and the requisite configuration. The example below declares three services named `local`, `test`, and `amazon`:

```yml
local:
  service: Disk
  root: <%= Rails.root.join("storage") %>
 
test:
  service: Disk
  root: <%= Rails.root.join("tmp/storage") %>
 
amazon:
  service: S3
  access_key_id: "..."
  secret_access_key: "..."
  bucket: ""
  region: "" # e.g. 'us-east-1'
```

Tell Active Storage which service to use by setting `Rails.application.config.active_storage.service`. Because each environment will likely use a different service, it is recommended to do this on a per-environment basis.

