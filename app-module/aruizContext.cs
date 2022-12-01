using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mobile_app_messaging_module.DataModels;
using System.Net;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

public class aruizContext : DbContext
{
    private string _connectionString;
    private string _table;
    public aruizContext(String table)
    {
        _connectionString = "Server=cse.unl.edu; Port=3306; Database=aruiz; Uid=aruiz; Pwd=uHVUeBooNA8;";
        _table = table;
    }
    public aruizContext(DbContextOptions<aruizContext> options) : base(options)
    {
        //var builder = new ConfigurationBuilder();
        //builder.AddJsonFile("appsettings.json", optional: false);

        //var configuration = builder.Build();

        _table = "Announcements";
        _connectionString = "Server=cse.unl.edu; Port=3306; Database=aruiz; Uid=aruiz; Pwd=uHVUeBooNA8;";
    }
    public DbSet<Announcement> Announcements { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder
                .UseMySql(_connectionString, ServerVersion.AutoDetect(_connectionString)).EnableSensitiveDataLogging();
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Announcement>(entity =>
        {
            entity.ToTable(_table);

            entity.Property(e => e.idAnnouncements)
                .IsRequired()
                .HasColumnName("idAnnouncements")
                .HasColumnType("int(11)");

            entity.Property(e => e.title)
                .HasColumnName("title")
                .HasMaxLength(50);

            entity.Property(e => e.description)
                .HasColumnName("description")
                .HasMaxLength(300);

            entity.Property(e => e.type)
                .HasColumnName("type")
                .HasMaxLength(45);

            entity.Property(e => e.link)
                .HasColumnName("link")
                .HasMaxLength(45);

            entity.Property(e => e.background)
                .HasColumnName("background")
                .HasMaxLength(45);

            entity.Property(e => e.publishDate)
                .HasColumnName("publishDate")
                .HasColumnType("date");

            entity.Property(e => e.expirationDate)
                .HasColumnName("expirationDate")
                .HasColumnType("date");
        });
    }
}