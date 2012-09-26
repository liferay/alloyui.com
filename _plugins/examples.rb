module Jekyll
  class ListDemoIndex < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.read_yaml(File.join(base, '_layouts'), 'example.html')
      self.data['example'] = self.get_example(site)
      self.process(@name)
    end

    def get_example(site)
      {}.tap do |example|
        Dir['_example/*.yml'].each do |path|
          name   = File.basename(path, '.yml')
          config = YAML.load(File.read(File.join(@base, path)))
          type   = config['type']

          if config['active']
            example[type] = {} if example[type].nil?
            example[type][name] = config
          end
        end
      end
    end
  end

  class SingleDemoIndex < Page
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

  class GenerateListDemo < Generator
    safe true
    priority :normal

    def generate(site)
      write_example(site)
    end

    # Loops through the list of example pages and processes each one.
    def write_example(site)
      if Dir.exists?('_example')
        Dir.chdir('_example')
        Dir["*.yml"].each do |path|
          name = File.basename(path, '.yml')
          self.write_single_demo_index(site, "_example/#{path}", name)
        end

        Dir.chdir(site.source)
        self.write_example_index(site)
      end
    end

    def write_example_index(site)
      example = ListDemoIndex.new(site, site.source, "/example")
      example.render(site.layouts, site.site_payload)
      example.write(site.dest)

      site.pages << example
      site.static_files << example
    end

    def write_single_demo_index(site, path, name)
      single_demo = SingleDemoIndex.new(site, site.source, "/example/#{name}", path)

      if single_demo.data['active']
        single_demo.render(site.layouts, site.site_payload)
        single_demo.write(site.dest)

        site.pages << single_demo
        site.static_files << single_demo
      end
    end
  end
end