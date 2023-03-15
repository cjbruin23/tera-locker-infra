import { Stack, StackProps, aws_s3 } from "aws-cdk-lib";
import { BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class TeraLockerInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const existingBucket = aws_s3.Bucket.fromBucketArn(
      this,
      "ContentBucket",
      "arn:aws:s3:::teralockerinfrastack-contentbucketlocal7b1f5302-1s1u1ljljm2gh"
    );

    console.log("existing bucket", existingBucket);

    try {
      new aws_s3.Bucket(this, "ContentBucketLocal", {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        versioned: true,
      });
    } catch (err) {
      console.log("err", err);
    }
  }
}
