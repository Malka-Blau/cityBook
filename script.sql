USE [master]
GO
/****** Object:  Database [CityBook]    Script Date: 01/07/2021 00:05:19 ******/
CREATE DATABASE [CityBook]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CityBook', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQL\MSSQL\DATA\CityBook.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CityBook_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQL\MSSQL\DATA\CityBook_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CityBook] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CityBook].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CityBook] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CityBook] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CityBook] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CityBook] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CityBook] SET ARITHABORT OFF 
GO
ALTER DATABASE [CityBook] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CityBook] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CityBook] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CityBook] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CityBook] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CityBook] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CityBook] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CityBook] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CityBook] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CityBook] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CityBook] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CityBook] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CityBook] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CityBook] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CityBook] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CityBook] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CityBook] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CityBook] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CityBook] SET  MULTI_USER 
GO
ALTER DATABASE [CityBook] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CityBook] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CityBook] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CityBook] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CityBook] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CityBook] SET QUERY_STORE = OFF
GO
USE [CityBook]
GO
/****** Object:  Table [dbo].[Children]    Script Date: 01/07/2021 00:05:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Children](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](25) NULL,
	[LastName] [nvarchar](25) NULL,
	[IdentityUser] [nchar](10) NULL,
	[BornDate] [date] NULL,
	[IdParent] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 01/07/2021 00:05:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] NOT NULL,
	[FirstName] [nvarchar](25) NULL,
	[LastName] [nvarchar](25) NULL,
	[IdentityUser] [nchar](10) NULL,
	[Gendor] [nvarchar](10) NULL,
	[HMO] [nvarchar](30) NULL,
	[NumChildren] [int] NULL,
	[BornDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (0, NULL, NULL, NULL, NULL, NULL, 0, NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (1, N'mali', N'blau', NULL, N'male', N'Macabi', 2, CAST(N'0001-01-01' AS Date))
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (2, N'Miriam', N'Cohen', NULL, N'male', N'Macabi', 3, CAST(N'0001-01-01' AS Date))
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (3, N'Sari', N'levi', NULL, N'male', N'Macabi', 2, CAST(N'0001-01-01' AS Date))
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (123456789, N'mj', NULL, NULL, NULL, N'oj', 0, CAST(N'2021-06-30' AS Date))
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (222222222, N'aa', NULL, NULL, NULL, N'dccee', 0, NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [IdentityUser], [Gendor], [HMO], [NumChildren], [BornDate]) VALUES (555555555, N'fff', NULL, NULL, NULL, N'hhkhk', 0, CAST(N'2021-06-30' AS Date))
ALTER TABLE [dbo].[Children]  WITH CHECK ADD FOREIGN KEY([IdParent])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Children]  WITH CHECK ADD  CONSTRAINT [FK_Children_Parent] FOREIGN KEY([IdParent])
REFERENCES [dbo].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Children] CHECK CONSTRAINT [FK_Children_Parent]
GO
USE [master]
GO
ALTER DATABASE [CityBook] SET  READ_WRITE 
GO
