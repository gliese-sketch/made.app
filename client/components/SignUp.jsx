import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

function SignUp() {
  return (
    <div
      className="bg-blue-200 flex items-center justify-center min-h-screen 
  w-full"
    >
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="maderoom logo"
            height={40}
            radius="sm"
            src="favicon.ico"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">MADE Room</p>
            <p className="text-small text-default-500">made.phleebs.tech</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/shantanuuchak/made"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
