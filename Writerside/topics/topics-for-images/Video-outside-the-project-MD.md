# Video outside the project MD

## Video name with spaces and src outside the image dir

<video src="../../stardust-sandbox/input/sandbox/images/sample_video (360p).mp4"/>

## Video name without spaces and src outside the image dir

<video src="../../stardust-sandbox/input/sandbox/images/SampleImages/Animations_and_thumbnails/qf_demo.mp4"/>

## Video with $PROJECT_DIR$

<video src="$PROJECT_DIR$/test-data-nebula/imageStock/goLand.mp4"/>

## Video with $WRS_MODULE$

<video src="$WRS_MODULE$/../imageStock/goLand.mp4"/>

## Preview-src and video outside the image dir

<video src="$WRS_MODULE$/../imageStock/goLand.mp4" preview-src="../../imageStock/flamingo-gif.gif"/>

## Preview-src with $PROJECT_DIR$

<video src="../../imageStock/goLand.mp4" preview-src="$PROJECT_DIR$/test-data-nebula/imageStock/flamingo-gif.gif"/>

## Preview-src with $WRS_MODULE$

<video src="../../imageStock/goLand.mp4" preview-src="$WRS_MODULE$/../imageStock/flamingo-gif.gif"/>