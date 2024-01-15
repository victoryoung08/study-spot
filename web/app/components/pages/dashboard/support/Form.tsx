import { Button } from "@/app/components/ui/button";

export default function SupportForm() {
  return (
    <div>
      <div className="mb-5">
        <p className="text-center">
          We&apos;re here to help. Let us know if you have any feedback or
          questions
        </p>
      </div>
      <div>
        <form action="" className="lg:w-2/4 mx-auto space-y-5">
          <div>
            {/* {errors.cafe_name && (
              <div className="flex justify-start ml-4 mb-1">
                <span className="text-xs text-red-400">
                  {errors.cafe_name.message}
                </span>
              </div>
            )} */}
            <input
              type="text"
              //   {...register("cafe_name")}
              placeholder="Your First Name"
              className="input input-bordered w-full rounded-2xl border-2 border-white text-sm bg-[#3a3939] focus:border-primary"
            />
          </div>
          <div>
            {/* {errors.cafe_name && (
              <div className="flex justify-start ml-4 mb-1">
                <span className="text-xs text-red-400">
                  {errors.cafe_name.message}
                </span>
              </div>
            )} */}
            <input
              type="text"
              //   {...register("cafe_name")}
              placeholder="Your Email"
              className="input input-bordered w-full rounded-2xl border-2 border-white text-sm bg-[#3a3939] focus:border-primary"
            />
          </div>
          <div>
            {/* {errors.cafe_name && (
              <div className="flex justify-start ml-4 mb-1">
                <span className="text-xs text-red-400">
                  {errors.cafe_name.message}
                </span>
              </div>
            )} */}
            <input
              type="text"
              //   {...register("cafe_name")}
              placeholder="Your Cafe Name"
              className="input input-bordered w-full rounded-2xl border-2 border-white text-sm bg-[#3a3939] focus:border-primary"
            />
          </div>
          <div>
            <textarea
              //   {...register("inquiry")}
              className="textarea textarea-bordered w-full rounded-2xl border-2 border-white focus:border-primary bg-[#3a3939]"
              rows={5}
              placeholder="Your inquiry"
            ></textarea>
          </div>
          <div>
            {/* {error && (
              <p className="text-sm text-warning">
                Error Submitting Form, Please try again
              </p>
            )} */}

            <Button className="w-full sm:w-52 py-5 bg-primary hover:bg-primary border-2 border-white rounded-2xl">
              {/* {loading ? "Submitting..." : "Submit"} */}
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
