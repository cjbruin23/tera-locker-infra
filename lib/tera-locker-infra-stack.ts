import { Stack, StackProps, aws_s3 } from "aws-cdk-lib";
import { BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class TeraLockerInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new aws_s3.Bucket(this, "ContentBucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });
  }
}
