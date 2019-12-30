# Rails Active Storage Notes

Active Storage facilitates uploading files to a cloud storage service like Amazon S3 and attaching those files to Active Record objects. It comes with a local disk-based service for development and testing and supports mirroring files to subordinate services for backups and migrations.

Using Active Storage, an application can transform image uploads with ImageMagick, generate image representations of non-image uploads like PDFs and videos, and extract metadata from arbitrary files.
