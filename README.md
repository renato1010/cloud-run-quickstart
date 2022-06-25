## Google Cloud Run Quickstart

### Objectives

1. Create a simple ExpressJS api Node v18 + Typescript
2. Dockerize API and run locally
3. Deploy API to Google Cloud Run (Need GCP account, and Google Cloud CLI)

### ExpressJS API

This is not really interesting... it is more or less boilerplate code that allows us to check if the routing is working correctly.  
It will let us check a couple of basic GET calls and a POST that only returns the body of the request.

### Dockerize API

We'll create an image from code using [Dockerfile](Dockerfile), then run that as container in Port 3000  
In order to check the POST request used [Insomnia](https://insomnia.rest/) app.

```bash
docker run -p 3000:3000 express-api
```

**GET /**

![express-get-root](https://icons-images.s3.us-east-2.amazonaws.com/express-api-get-root.png)

**POST /users**

![post req/res](https://icons-images.s3.us-east-2.amazonaws.com/local-container-post-users.png)

#### Going Serverless

We'll deploy our container to [Google Cloud Run](https://cloud.google.com/run)

First Go [Google console](https://console.cloud.google.com/), create a project and copy ID

To set the default project for your Cloud Run service:

```bash
gcloud config set project PROJECT_ID
```

_Replace PROJECT_ID with the name of the project you created for this quickstart._

In your root folder deploy using command:

```bash
gcloud run deploy --source .
```

If prompted to enable the API, Reply y to enable.

When you are prompted for the source code location, press Enter to deploy the current folder.

When you are prompted for the service name, press Enter to accept the default name, helloworld.

If you are prompted to enable the Artifact Registry API, respond by pressing y.

When you are prompted for region: select the region of your choice, for example us-central1.

You will be prompted to allow unauthenticated invocations: respond y .

Then wait a few moments until the deployment is complete. On success, the command line displays the service URL.

**Then visit your deployed service** by opening the service URL in a web browser

**GET /**

![Cloud Run get root](https://icons-images.s3.us-east-2.amazonaws.com/get-root-cloud-run-service.png)

** POST /users**

![post req/res](https://icons-images.s3.us-east-2.amazonaws.com/post-users-cloud-run-service.png)
