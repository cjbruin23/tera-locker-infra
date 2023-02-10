import { Stack, StackProps, aws_s3 } from "aws-cdk-lib";
import { Construct } from "constructs";

export class TeraLockerInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new aws_s3.Bucket(this, "FirstBucket", {
      versioned: true,
    });
  }
}
