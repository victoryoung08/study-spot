"use client";
import { pushDataLayer } from "@/app/lib/gtm";
import { Container } from "../../common/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TwoColumnCtaBorder({ libraries }: any) {
  const { currentLibraries, handlePageChange, totalPages, currentPage } =
    usePagination(libraries);
  return (
    <Container>
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Explore the Cafe Library
        </h2>
      </div>
      <div className="space-y-10">
        {currentLibraries?.map((item: any) => {
          return (
            <Link
              onClick={() =>
                pushDataLayer({
                  name: item?.attributes.title,
                  path: `/library/${item.attributes.slug}`,
                })
              }
              href={`/library/${item.attributes.slug}`}
              key={item?.id}
              className="flex border rounded-3xl "
            >
              <div>
                <Image
                  src={
                    item?.attributes?.library_image?.data?.attributes?.url || ""
                  }
                  alt={
                    item.attributes.library_image.data.attributes
                      .alternativeText || item.attributes.title
                  }
                  width={500}
                  height={350}
                  className="rounded-tl-3xl rounded-bl-3xl"
                />
              </div>
              <div className="flex-1 m-10">
                <h2 className="font-medium text-3xl">
                  {item?.attributes.title || ""}
                </h2>
                <p className="text-base mt-5">
                  {item?.attributes.short_description || ""}
                </p>
                <div className="flex justify-end mt-5">
                  <p className="text-sm font-bold">Read more</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-5">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`mx-2 py-2 px-4 rounded-md ${
                  currentPage === page ? "bg-primary text-white" : "bg-gray-700"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </Container>
  );
}

function usePagination(libraries: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const librariesPerPage = 5;

  const indexOfLastLibrary = currentPage * librariesPerPage;
  const indexOfFirstLibrary = indexOfLastLibrary - librariesPerPage;
  const currentLibraries = libraries?.data?.slice(
    indexOfFirstLibrary,
    indexOfLastLibrary
  );

  const totalPages = Math.ceil(
    (libraries?.data?.length || 0) / librariesPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentLibraries,
    totalPages,
    handlePageChange,
    currentPage,
  };
}
