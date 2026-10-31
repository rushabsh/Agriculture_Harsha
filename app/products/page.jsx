"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  categories,
  categoryDetails,
  productsData,
} from "@/components/Products/productsData";
import ProductsHero from "@/components/Products/ProductsHero";
import ProductsCredentialsBanner from "@/components/Products/ProductsCredentialsBanner";
import ProductsCategoryTabs from "@/components/Products/ProductsCategoryTabs";
import AllProductsOverview from "@/components/Products/AllProductsOverview";
import CategoryDetailShowcase from "@/components/Products/CategoryDetailShowcase";
import TechnicalCatalogFilter from "@/components/Products/TechnicalCatalogFilter";
import TechnicalGradesGrid from "@/components/Products/TechnicalGradesGrid";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const currentDetail =
    selectedCategory !== "All" ? categoryDetails[selectedCategory] : null;

  // Handle switching category tab
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubCategory("All");
    setSearchQuery("");
  };

  // Filter grades based on subcategory & search query
  const filteredGrades = useMemo(() => {
    if (!currentDetail?.grades) return [];
    return currentDetail.grades.filter((g) => {
      const matchesSub =
        selectedSubCategory === "All" ||
        selectedSubCategory.startsWith("All") ||
        g.subCategory === selectedSubCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.badge.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSub && matchesSearch;
    });
  }, [currentDetail, selectedSubCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb Hero */}
      <ProductsHero
        selectedCategory={selectedCategory}
        currentDetail={currentDetail}
        onSelectCategory={handleSelectCategory}
      />

      {/* Official Credentials Banner */}
      <ProductsCredentialsBanner />

      {/* Main Catalog Workspace */}
      <main className="flex-1 bg-[#FAF8F2] py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Category Switcher Menu */}
          <ProductsCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* VIEW 1: ALL PRODUCTS OVERVIEW */}
          {selectedCategory === "All" && (
            <AllProductsOverview
              products={productsData}
              categoryDetails={categoryDetails}
              onSelectCategory={handleSelectCategory}
            />
          )}

          {/* VIEW 2: DEDICATED CATEGORY DETAILS (When a specific category tab is clicked) */}
          {selectedCategory !== "All" && currentDetail && (
            <div className="space-y-14 animate-fadeIn">
              <CategoryDetailShowcase
                category={selectedCategory}
                detail={currentDetail}
                onBack={() => handleSelectCategory("All")}
              />

              <div className="space-y-6">
                <TechnicalCatalogFilter
                  filteredCount={filteredGrades.length}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  subCategories={currentDetail.subCategories}
                  selectedSubCategory={selectedSubCategory}
                  onSelectSubCategory={setSelectedSubCategory}
                />

                <TechnicalGradesGrid
                  grades={filteredGrades}
                  category={selectedCategory}
                  searchQuery={searchQuery}
                  onReset={() => {
                    setSearchQuery("");
                    setSelectedSubCategory("All");
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
