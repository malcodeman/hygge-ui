import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Table, TableCell, TableColumnHeader } from "hygge-ui/table";

export const Route = createFileRoute("/docs/components/table")({
  component: TablePage,
  head: () => ({
    meta: [
      {
        title: "Table | Hygge UI",
      },
    ],
  }),
});

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

function TablePage() {
  return (
    <>
      <PageHeader
        title="Table"
        description="Used to display data in a tabular format."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/table.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <Table>
            <thead>
              <tr>
                <TableColumnHeader>Product</TableColumnHeader>
                <TableColumnHeader>Category</TableColumnHeader>
                <TableColumnHeader>Price</TableColumnHeader>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        }
        code={`<Table>
  <thead>
    <tr>
      <TableColumnHeader>Product</TableColumnHeader>
      <TableColumnHeader>Category</TableColumnHeader>
      <TableColumnHeader>Price</TableColumnHeader>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>{product.price}</TableCell>
      </tr>
    ))}
  </tbody>
</Table>`}
      />
    </>
  );
}
