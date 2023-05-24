# Custom Images
*(for premium bots)*

Upload custom images in the app from your device, without any image links. You can use the custom image as an embed image using `$customImage[]`.

## Uploading 

1. Select your bot and click *"Image functions"* in dashboard tab.

    ![example1](https://user-images.githubusercontent.com/95774950/183711325-a47e97e9-133c-4456-b598-a70eb18795bf.jpeg)

2. Click the "Add image" button.

     ![example2](https://user-images.githubusercontent.com/69215413/126851897-314262e5-8f9c-459f-865a-88de836e703b.png)

3. Provide an image name and tag. The tag is used in `$customImage[]` to get the image. The name can be anything.

     ![example3](https://user-images.githubusercontent.com/95774950/183711379-3fb0ae4b-1f65-426d-bcdc-ab7204b9e792.jpg)

4. Upload your image by clicking *"Selected Image"* and save the changes.

## Retrieving
### $customImage[]
This function is used to return the uploaded image in the app.

#### Syntax
```
$customImage[Custom image tag]
```

#### Parameters

| Argument           | Description                                                              | Type   | Flag     |
|--------------------|--------------------------------------------------------------------------|--------|----------|
| Custom image tag   | The tag that you set the custom image to, previously.               | String | Required |


#### Example
```
$nomention
$customImage[NiceImage]
```

![example](https://user-images.githubusercontent.com/69215413/126852524-dfcb237a-8283-43fd-9e17-8dd97bd9ed85.png)
