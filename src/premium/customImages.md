# Custom Images
*(for premium bots)*

Upload custom images in the app from your device, no image links required! Then, you can use the custom image as a embed image using `$customImage[]`.

## Uploading 
⚠️ This feature is only for premium bots. ⚠️

**#1:** Select your bot.

**#2:** Click the menu icon.

![example1](https://user-images.githubusercontent.com/69215413/126851796-ab0f2d40-eae4-4de2-95c0-20f56f63e34e.png)

**#3:** Select the "Custom images" tab.

![example2](https://user-images.githubusercontent.com/69215413/126851857-c15baeb9-f953-41af-a1b0-d7db2da9620b.png)

**#4:** Click the "Add image" button.

![example3](https://user-images.githubusercontent.com/69215413/126851897-314262e5-8f9c-459f-865a-88de836e703b.png)

**#5:** Provide a image name and tag. The tag is used in `$customImage[]` to get the image. The name can be anything.

![example4](https://user-images.githubusercontent.com/69215413/126851947-f5bb2b94-73de-41b3-bcd0-b10d45ea462a.png)

**#6:** Upload your image.

![example5](https://user-images.githubusercontent.com/69215413/126851959-6a50add7-b9fe-4a5a-aac4-5aea32b4e012.png)

**#7:** Save your changes.

![example6](https://user-images.githubusercontent.com/69215413/126851970-778f5641-f594-4278-833a-cff7601a44d2.png)

## Function
The `$customImage[]` function is used to get the uploaded image.

### Usage
```
$customImage[imageTag]
```

#### Breakdown
- `imageTag` - The tag that you set this custom image to, previously.

### Example
```
$nomention
$customImage[NiceImage]
```

![ex](https://user-images.githubusercontent.com/69215413/126852524-dfcb237a-8283-43fd-9e17-8dd97bd9ed85.png)
![Screenshot_20220809-223716-01](https://user-images.githubusercontent.com/95774950/183711325-a47e97e9-133c-4456-b598-a70eb18795bf.jpeg)
![Screenshot_20220809-223744](https://user-images.githubusercontent.com/95774950/183711379-3fb0ae4b-1f65-426d-bcdc-ab7204b9e792.jpg)
