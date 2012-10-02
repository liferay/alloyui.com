module Jekyll
  class ListExampleIndex < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.read_yaml(File.join(base, '_layouts'), 'list-example.html')
      self.data['example'] = self.get_example(site)
      self.process(@name)
    end

    def get_example(site)
      {}.tap do |example|
        Dir['examples/*.yml'].each do |path|
          name   = File.basename(path, '.yml')
          config = YAML.load(File.read(File.join(@base, path)))

          if config['active']
            example[name] = {} if example[name].nil?
            example[name] = config
          end
        end
      end
    end
  end

  class SingleExampleIndex < Page
    def initialize(site, base, dir, path)
      @site     = site
      @base     = base
      @dir      = dir
      @name     = "index.html"
      self.data = YAML.load(File.read(File.join(@base, path)))
      self.data['title'] = "#{self.data['name']} | #{self.data['role']}"

      self.process(@name)
    end
  end

  class GenerateListExample < Generator
    safe true
    priority :normal

    def generate(site)
      write_example(site)
    end

    # Loops through the list of example pages and processes each one.
    def write_example(site)
      if Dir.exists?('examples')
        Dir.chdir('examples')
        Dir["*.yml"].each do |path|
          name = File.basename(path, '.yml')
          self.write_single_example_index(site, "examples/#{path}", name)
        end

        Dir.chdir(site.source)
        self.write_example_index(site)
      end
    end

    def write_example_index(site)
      example = ListExampleIndex.new(site, site.source, "/examples")
      example.render(site.layouts, site.site_payload)
      example.write(site.dest)

      site.pages << example
      site.static_files << example
    end

    def write_single_example_index(site, path, name)
      single_example = SingleExampleIndex.new(site, site.source, "/examples/#{name}", path)

      if single_example.data['active']
        single_example.render(site.layouts, site.site_payload)
        single_example.write(site.dest)

        site.pages << single_example
        site.static_files << single_example
      end
    end
  end
end