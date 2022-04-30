using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class RelationshipMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Precio",
                table: "Producto",
                type: "BINARY_DOUBLE",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(2000)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Precio",
                table: "Producto",
                type: "NVARCHAR2(2000)",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "BINARY_DOUBLE");
        }
    }
}
